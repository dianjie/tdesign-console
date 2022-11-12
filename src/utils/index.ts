export function formatDictValue(options: Array<any>, value: Nullable<StrOrNum>, type: 'string' | 'number' = 'number') {
  if (!value || !options) {
    return '';
  }
  if (type === 'string') {
    value += '';
  } else if (type === 'number') {
    value = +value;
  }
  const matchItem = options.find((item) => item.dictKey === value);
  return matchItem && matchItem.dictValue ? matchItem.dictValue : '';
}

export function formatIdName(
  options: Array<any>,
  value: string,
  config: { name: string; id: string } = { name: 'name', id: 'id' },
) {
  if (!value || !options) {
    return '';
  }
  const idKey = config.id;
  const nameKey = config.name;
  const matchItem = options.find((item) => item[idKey] === value);
  return matchItem && matchItem[nameKey] ? matchItem[nameKey] : '';
}

export function changeDictDataType(options: Array<any>, type: 'string' | 'number' = 'number') {
  if (!options) {
    return [];
  }
  return options.map((item) => {
    const temp = { ...item };
    if (type === 'string') {
      temp.dictKey += '';
    } else if (type === 'number') {
      temp.dictKey = +temp.dictKey;
    }
    return temp;
  });
}

export function openWindow(
  url: string,
  opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean },
) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');

  window.open(url, target, feature.join(','));
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

// https://stackoverflow.com/questions/12175991/crop-image-white-space-automatically-using-jquery
export const removeImageBlanks = (imageObject: HTMLImageElement) => {
  const imgWidth = imageObject.width;
  const imgHeight = imageObject.height;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', String(imgWidth));
  canvas.setAttribute('height', String(imgHeight));
  const context = canvas.getContext('2d');
  context.fillStyle = '#fff';
  context.fillRect(0, 0, imgWidth, imgHeight);
  context.drawImage(imageObject, 0, 0);

  const imageData = context.getImageData(0, 0, imgWidth, imgHeight);
  const { data } = imageData;
  const getRBG = (x: number, y: number) => {
    const offset = imgWidth * y + x;
    return {
      red: data[offset * 4],
      green: data[offset * 4 + 1],
      blue: data[offset * 4 + 2],
      opacity: data[offset * 4 + 3],
    };
  };
  const isWhite = (rgb) => {
    // many images contain noise, as the white is not a pure #fff white
    return rgb.red > 200 && rgb.green > 200 && rgb.blue > 200;
  };
  const scanY = (fromTop) => {
    const offset = fromTop ? 1 : -1;

    // loop through each row
    for (let y = fromTop ? 0 : imgHeight - 1; fromTop ? y < imgHeight : y > -1; y += offset) {
      // loop through each column
      for (let x = 0; x < imgWidth; x++) {
        const rgb = getRBG(x, y);
        if (!isWhite(rgb)) {
          if (fromTop) {
            return y;
          }
          return Math.min(y + 1, imgHeight);
        }
      }
    }
    return null; // all image is white
  };
  const scanX = (fromLeft) => {
    const offset = fromLeft ? 1 : -1;

    // loop through each column
    for (let x = fromLeft ? 0 : imgWidth - 1; fromLeft ? x < imgWidth : x > -1; x += offset) {
      // loop through each row
      for (let y = 0; y < imgHeight; y++) {
        const rgb = getRBG(x, y);
        if (!isWhite(rgb)) {
          if (fromLeft) {
            return x;
          }
          return Math.min(x + 1, imgWidth);
        }
      }
    }
    return null; // all image is white
  };

  const cropTop = scanY(true);
  const cropBottom = scanY(false);
  const cropLeft = scanX(true);
  const cropRight = scanX(false);
  const cropWidth = cropRight - cropLeft;
  const cropHeight = cropBottom - cropTop;

  canvas.setAttribute('width', String(cropWidth));
  canvas.setAttribute('height', String(cropHeight));
  // finally crop the guy
  canvas.getContext('2d').drawImage(imageObject, cropLeft, cropTop, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

  return canvas.toDataURL();
};

export const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export const loadImage = (url: string) => {
  return new Promise((resolve, reject) => {
    let myImage = new Image();
    myImage.onload = () => {
      resolve(myImage);
      myImage = null;
    };
    myImage.onerror = (error) => {
      reject(error);
      myImage = null;
    };
    myImage.src = url;
  });
};
