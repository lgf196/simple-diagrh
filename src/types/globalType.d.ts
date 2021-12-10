import React from 'react';
import { componentInitialStateType } from '@/redux/reduce/component';
import { contextMenuInitialStateType } from '@/redux/reduce/contextMenu';
import { markLineInitialStateType } from '@/redux/reduce/markLine';
import { markLineActionMerage } from '@/redux/action/markLine';
import { contextMenuActionMerage } from '@/redux/action/contextMenu';
import { componentActionMerage } from '@/redux/action/component';
import { Dispatch } from 'redux';
declare global {
  /* eslint-disable */
  interface templateDateInterface<T = string, K = unknown> {
    /**
     * @description 类别
     */
    category: T;
    /**
     * @description 类别模块中的类型
     */
    type: T;
    id: T;
    component: T;
    label: T;
    propValue?: K;
    icon?: T;
    style?: React.CSSProperties;
  }
  interface templateDataType extends templateDateInterface {
    /**
     * @description 动态生成的组件id
     */
    componentId?: string;
    [par: string]: any;
  }
  /**
   * @description 全局声明redux中的store数据
   */
  interface storeType {
    component: componentInitialStateType;
    contextMenu: contextMenuInitialStateType;
    markLine: markLineInitialStateType;
  }
  /**
   * @description 全局声明redux中的dispatch数据
   */
  type storeDisPatch = Dispatch<
    markLineActionMerage | contextMenuActionMerage | componentActionMerage
  >;
}
