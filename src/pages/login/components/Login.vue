<template>
  <t-form
    ref="form"
    :class="['item-container', `login-${type}`]"
    :data="formData"
    :rules="FORM_RULES"
    :disabled="submiting"
    label-width="0"
    @submit="onSubmit"
  >
    <template v-if="type == 'password'">
      <t-form-item v-if="website.tenantMode" name="tenantId">
        <t-input v-model="formData.tenantId" size="large" placeholder="请输入租户：000000">
          <template #prefix-icon>
            <t-icon name="usergroup" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="username">
        <t-input v-model="formData.username" size="large" placeholder="请输入账号：admin">
          <template #prefix-icon>
            <t-icon name="user" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input
          v-model="formData.password"
          size="large"
          :type="showPsw ? 'text' : 'password'"
          clearable
          placeholder="请输入登录密码：123456"
        >
          <template #prefix-icon>
            <t-icon name="lock-on" />
          </template>
          <template #suffix-icon>
            <t-icon :name="showPsw ? 'browse' : 'browse-off'" @click="showPsw = !showPsw" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item v-if="website.captchaMode" name="code">
        <t-input v-model="formData.code" size="large" placeholder="请输入验证码">
          <template #prefix-icon>
            <t-icon name="tips" />
          </template>
          <template #suffix-icon>
            <div class="login-code">
              <img :src="image" class="login-code-img" @click="refreshCode" />
            </div>
          </template>
        </t-input>
      </t-form-item>

      <div class="check-container remember-pwd">
        <t-checkbox>记住账号</t-checkbox>
        <span class="tip">忘记账号？</span>
      </div>
    </template>

    <!-- 扫码登陆 -->
    <template v-else-if="type == 'qrcode'">
      <div class="tip-container">
        <span class="tip">请使用微信扫一扫登录</span>
        <span class="refresh">刷新 <t-icon name="refresh" /> </span>
      </div>
      <qrcode-vue value="" :size="192" level="H" />
    </template>

    <!-- 手机号登陆 -->
    <template v-else>
      <t-form-item name="phone">
        <t-input v-model="formData.phone" size="large" placeholder="请输入手机号码">
          <template #prefix-icon>
            <t-icon name="mobile" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item class="verification-code" name="verifyCode">
        <t-input v-model="formData.verifyCode" size="large" placeholder="请输入验证码" />
        <t-button variant="outline" :disabled="countDown > 0" @click="sendCode">
          {{ countDown == 0 ? '发送验证码' : `${countDown}秒后可重发` }}
        </t-button>
      </t-form-item>
    </template>

    <t-form-item v-if="type !== 'qrcode'" class="btn-container">
      <t-button block size="large" type="submit"> 登录 </t-button>
    </t-form-item>

    <div class="switch-container">
      <span v-if="type !== 'password'" class="tip" @click="switchType('password')">使用账号密码登录</span>
      <span v-if="type !== 'qrcode'" class="tip" @click="switchType('qrcode')">使用微信扫码登录</span>
      <span v-if="type !== 'phone'" class="tip" @click="switchType('phone')">使用手机号登录</span>
    </div>
  </t-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import QrcodeVue from 'qrcode.vue';
import { type FormInstanceFunctions, MessagePlugin } from 'tdesign-vue-next';
import { useCounter } from '@/hooks';
import { useUserStore } from '@/store';
import website from '@/config/website';
import { BASE_HOME } from '@/router/constant';
import { getCaptcha } from '@/api/system/user';

const userStore = useUserStore();

const INITIAL_DATA = {
  tenantId: website.tenantId,
  username: 'admin',
  password: 'admin',
  type: 'account',
  phone: '',
  verifyCode: '',
  checked: false,
  // 验证码的值
  code: '',
  // 验证码的索引
  key: '',
  grant_type: website.captchaMode ? 'captcha' : 'password',
  scope: 'all',
};

const FORM_RULES = {
  tenantId: [{ required: true, message: '租户必填', type: 'error' }],
  phone: [{ required: true, message: '手机号必填', type: 'error' }],
  username: [{ required: true, message: '账号必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
  code: [{ required: true, message: '验证码必填', type: 'error' }],
  verifyCode: [{ required: true, message: '验证码必填', type: 'error' }],
};

const type = ref('password');

const form = ref<FormInstanceFunctions>();
const formData = ref({ ...INITIAL_DATA });
const showPsw = ref(false);
const image = ref('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
const submiting = ref(false);

const [countDown, handleCounter] = useCounter();

const switchType = (val: string) => {
  type.value = val;
};

const router = useRouter();

/**
 * 发送验证码
 */
const sendCode = () => {
  form.value.validate({ fields: ['phone'] }).then((e) => {
    if (e === true) {
      handleCounter();
    }
  });
};

const onSubmit = async ({ validateResult }) => {
  if (validateResult === true) {
    try {
      submiting.value = true;
      await userStore.login(formData.value);
      MessagePlugin.success('登陆成功');
      router.replace(BASE_HOME);
    } catch (e) {
      e.error_description && MessagePlugin.error(e.error_description);
      submiting.value = false;
      if (website.captchaMode) {
        refreshCode();
      }
    }
  }
};

async function refreshCode() {
  const data = await getCaptcha();
  image.value = data.image;
  formData.value.key = data.key;
}

if (website.captchaMode) {
  refreshCode();
}
</script>

<style lang="less" scoped>
@import url('../index.less');

.login-code {
  // display: flex;
  // align-items: center;
  // margin: 0 0 0 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 1px;
  z-index: 100;
}

.login-code-img {
  margin-top: 1px;
  width: 100px;
  height: 100%;
  background-color: #fdfdfd;
  border-left: 1px solid #f0f0f0;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 35px;
  text-indent: 1px;
  text-align: center;
  cursor: pointer !important;
}
</style>
