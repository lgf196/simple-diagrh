import React, { memo, FC } from 'react';
import { useDrag } from 'react-dnd';
import { tempalteType } from '@/graphTemplateType';
import { overHiddleText } from '@/utils';
import style from './index.module.scss';
import SvgCompent from '@/components/svgIcon';
const DragTarget: FC<{
  itemValue: tempalteType;
}> = memo(function DragTarget({ itemValue }) {
  const [, drager] = useDrag({
    type: 'Box',
    item: itemValue,
  });

  return (
    <a ref={drager} className={style.templateRender} title={itemValue.title}>
      {/* <img
        src="http://blog.lgf196.top/ant-simple-pro-document/logon.png"
        alt=""
      /> */}
      <SvgCompent iconClass={itemValue.type} fontSize="60px" />
      <p>{overHiddleText(itemValue.title, 7)}</p>
    </a>
  );
});

export default DragTarget;
