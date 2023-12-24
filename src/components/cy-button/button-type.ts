// 按钮类型
export enum EButtonType {
  DEFAULT = 'default',
  PRIMARY = 'parimary',
  SEARCH = 'search',
  RESET = 'reset',
  DELETE = 'delete',
  SUCCESS = 'success',
  UPLOAD = 'upload',
  DOWNLOAD = 'download',
  WARNING = 'warning',
  OPEN = 'open',
  CLOSE = 'close',
}

export enum EButtonSize {
  MINI = 'mini',
  NORMAL = 'normal',
  LARGER = 'larger',
}

// 按钮参数
export interface TButtonProps {
  label?: string;
  type?: EButtonType;
  size?: EButtonSize;
}
