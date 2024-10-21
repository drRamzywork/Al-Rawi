import React, { memo } from "react";
import classNames from "classnames";
import SwipeableBottomSheet from "@sergeymyssak/swipeable-bottom-sheet";
import "@sergeymyssak/swipeable-bottom-sheet/lib/min.css";

const BottomSheet = ({
  isOpen,
  disableSwipe = false,
  onChange,
  children,
  containerClassName,
  bodyClassName,
}) => (
  <SwipeableBottomSheet
    isOpen={isOpen}
    onChange={onChange}
    swipeableViewsProps={{ disabled: disableSwipe }}
    containerClassName={classNames("custom-bottom-sheet", containerClassName)}
    bodyClassName={classNames("custom-bottom-sheet__body", bodyClassName)}
  >
    {children}
  </SwipeableBottomSheet>
);

export default memo(BottomSheet);
