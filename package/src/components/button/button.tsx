import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "cva";

import { cn, isElementWithChildren, isReactElement } from "../../helpers/utils";
import { buttonVariants, iconVariants } from "./variants";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isIcon?: boolean;
    destructive?: boolean;
  };

export type ButtonElement = HTMLButtonElement;

const iconPadding = {
  md: "p-8px",
  sm: "p-6px",
  xs: "p-2px",
};

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      asChild = false,
      destructive = false,
      disabled = false,
      shape = "rounded",
      size = "md",
      variant = "primary",
      isIcon = false,
      ...otherProps
    },
    ref
  ) => {
    const useAsChild = asChild && isReactElement(children);
    const Component = useAsChild ? Slot : "button";

    const isVariantLinkOutlineTertiaryTransparent = React.useMemo(
      () => ["link", "outline", "tertiary", "transparent"].includes(variant),
      [variant]
    );

    const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
      const Component = React.isValidElement(icon) ? Slot : "span";

      const isNonDestructiveIcon =
        variant && isVariantLinkOutlineTertiaryTransparent && isIcon && !destructive;

      const iconClasses = cn(
        iconVariants({ size, variant, destructive }),
        isNonDestructiveIcon && "group-hover:opacity-70",
        destructive && "opacity-100",
        icon.props?.className
      );

      return <Component className={iconClasses}>{icon}</Component>;
    };

    const innerContent = useAsChild ? (
      React.cloneElement(children, {
        children: (
          <>
            {isElementWithChildren(children) &&
              isIcon &&
              renderIcon(children.props.children as React.ReactElement<HTMLElement>)}
            {isElementWithChildren(children) && !isIcon && <>{children.props.children}</>}
          </>
        ),
      })
    ) : (
      <>
        {React.isValidElement(children) &&
          isIcon &&
          renderIcon(children as React.ReactElement<HTMLElement>)}
        {children && !isIcon && <span className="px-1">{children}</span>}
      </>
    );

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({ size, variant, shape, destructive }),
          variant === "link" && children && "focus-visible:outline-0",
          isIcon && iconPadding[size],
          className
        )}
        disabled={disabled}
        {...otherProps}
      >
        {innerContent}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
