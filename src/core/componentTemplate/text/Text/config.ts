import { defaultProps } from '@/core/config/common';

export default {
  id: 'textText01',
  category: 'text',
  type: 'Text',
  component: 'Text',
  label: '文本组件',
  propValue: {
    ...defaultProps({ w: 200, h: 22 }),
    textVal: '文本',
    fontSize: 14,
  },
  icon: 'https://cdn.gudsen.com/2021/09/30/af90bac80a9447f18156e251ecbc1dff.png',
  style: {
    width: 200,
    height: 22,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '',
    letterSpacing: 0,
    color: '',
  },
  editableEl: [
    { key: 'textVal', name: '内容', type: 'TextArea', title: '内容' },
    {
      title: '样式',
      type: 'Color',
      name: '颜色',
      key: 'color',
    },
    {
      type: 'Background',
      name: '背景色',
      key: 'background',
    },
    {
      type: 'FontStyle',
      name: '样式',
      title: '文字选项',
      key: 'fontStyles',
    },
    {
      type: 'Number',
      name: '字号',
      key: 'fontSize',
      col: 12,
    },
    {
      type: 'Number',
      name: '字缩进',
      key: 'textIndent',
      col: 12,
    },
    {
      type: 'Number',
      name: '字间距',
      key: 'letterSpacing',
      col: 12,
    },
    {
      type: 'Number',
      name: '行高',
      key: 'lineHeight',
      col: 12,
    },
    {
      type: 'Padding',
      name: '内边距',
      key: 'padding',
    },
    {
      type: 'BorderRadius',
      name: '圆角',
      title: '高级样式',
      key: 'borderRadius',
    },
    {
      type: 'Border',
      name: '边框',
      key: 'border',
    },
    {
      type: 'Slider',
      name: '透明度',
      key: 'opacity',
    },
    {
      type: 'TextShadow',
      name: '投影',
      key: 'textShadow',
    },
  ],
} as templateDataType;
