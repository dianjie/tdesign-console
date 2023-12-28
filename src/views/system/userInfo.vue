<template>
  <div :class="tableVar">
    <t-tabs placement="left" :default-value="1" @change="handleGetUserInfo">
      <t-tab-panel :value="1" label="个人信息">
        <t-form
          ref="form"
          :data="formData"
          :label-width="100"
          :disabled="submiting"
          style="width: 55%"
          @submit="onSubmitBaseInfo"
        >
          <t-row :gutter="[0, 28]">
            <t-col :span="12">
              <t-form-item label="头像" name="avatar">
                <t-upload
                  ref="uploadRef"
                  v-model="formData.avatar"
                  theme="image"
                  tips="单张图片文件上传"
                  accept="image/*"
                  :locale="{
                    triggerUploadText: {
                      image: '请选择图片',
                    },
                  }"
                  :request-method="requestMethod"
                  :disabled="submiting"
                  @fail="handleFail"
                ></t-upload>
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="姓名" name="name">
                <t-input v-model="formData.name" placeholder="请输入姓名" clearable />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="用户名" name="realName">
                <t-input v-model="formData.realName" placeholder="请输入用户名" clearable />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="手机号" name="phone">
                <t-input v-model="formData.phone" placeholder="请输入手机号" clearable />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="邮箱" name="email">
                <t-input v-model="formData.email" theme="column" placeholder="请输入邮箱" clearable />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item>
                <t-button theme="primary" type="submit">更新基础信息</t-button>
              </t-form-item>
            </t-col>
          </t-row>
        </t-form>
      </t-tab-panel>
      <t-tab-panel :value="2" label="修改密码">
        <t-form
          ref="form2"
          :data="passwordForm"
          :label-width="100"
          :disabled="submiting2"
          :rules="rules2"
          style="width: 55%"
          @submit="onSubmitPassword"
        >
          <t-row :gutter="[0, 28]">
            <t-col :span="12">
              <t-form-item label="原密码" name="oldPassword">
                <t-input v-model="passwordForm.oldPassword" type="password" autocomplete="off"></t-input>
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="新密码" name="newPassword">
                <t-input v-model="passwordForm.newPassword" type="password" autocomplete="off"></t-input>
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="确认密码" name="newPassword1">
                <t-input v-model="passwordForm.newPassword1" type="password" autocomplete="off"></t-input>
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item>
                <t-button theme="primary" type="submit">修改密码</t-button>
              </t-form-item>
            </t-col>
          </t-row>
        </t-form>
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import md5 from 'crypto-js/md5';
import { MessagePlugin } from 'tdesign-vue-next';
import { onBeforeMount, ref, unref } from 'vue';

import { uploadOssDefult } from '@/api/resource/oss';
import { getUserInfo, updateInfo, updatePassword } from '@/api/system/user';
import { useDesign } from '@/hooks/web/useDesign';

const { tableVar } = useDesign();

const INITIAL_DATA = {
  id: '',
  avatar: [],
  name: '',
  realName: '',
  phone: '',
  email: '',
};

const submiting = ref(false);
const formData = ref({ ...INITIAL_DATA });

const form2 = ref(null);
const INITIAL_DATA2 = {
  oldPassword: '',
  newPassword: '',
  newPassword1: '',
};
const submiting2 = ref(false);
const passwordForm = ref({ ...INITIAL_DATA2 });

const rePassword = (val) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(passwordForm.value.newPassword === val);
      clearTimeout(timer);
    });
  });
};

const rules2 = ref({
  oldPassword: [{ required: true, message: '请输入原密码', type: 'error', trigger: 'blur' }],
  newPassword: [{ required: true, message: '请输入新密码', type: 'error' }],
  newPassword1: [
    // 自定义校验规则
    { required: true, message: '请输入确认密码', type: 'error' },
    { validator: rePassword, message: '确认密码与新密码不一致' },
  ],
});

const handleGetUserInfo = useDebounceFn((value) => {
  if (value === 1) {
    getUserInfo().then((user) => {
      formData.value = {
        id: user.id,
        avatar: user.avatar ? [{ url: user.avatar }] : [],
        name: user.name,
        realName: user.realName,
        phone: user.phone,
        email: user.email,
      };
    });
  }
}, 500);

const onSubmitBaseInfo = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const subimtData = {
      ...formData.value,
      avatar: formData.value.avatar.length ? formData.value.avatar[0]?.url : '',
    };
    updateInfo(subimtData)
      .then(() => {
        MessagePlugin.success('更新成功');
        handleGetUserInfo(1);
      })
      .finally(() => {
        submiting.value = false;
      });
  } else {
    MessagePlugin.warning(firstError);
  }
}, 300);

const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};

// 上传接口，可根据实际情况自己修改
const requestMethod = async (param) => {
  try {
    const data = await uploadOssDefult({ file: param.raw });
    return { status: 'success', response: { ...data, url: data.link } };
  } catch (error) {
    return { status: 'fail', error: '上传失败' };
  }
};

const onSubmitPassword = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting2.value = true;
    const { oldPassword, newPassword, newPassword1 } = unref(passwordForm);
    updatePassword(md5(oldPassword).toString(), md5(newPassword).toString(), md5(newPassword1).toString())
      .then(() => {
        MessagePlugin.success('修改密码成功!');
        form2.value?.reset();
      })
      .finally(() => {
        submiting2.value = false;
      });
  } else {
    MessagePlugin.warning(firstError);
  }
}, 300);

onBeforeMount(() => {
  handleGetUserInfo(1);
});
</script>

<style scoped></style>
