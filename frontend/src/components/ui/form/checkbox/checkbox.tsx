import { useEffect, useRef } from "react";
import { ComponentPropsWithRef } from "react";
import styles from "./checkbox.module.css";

type CheckboxProps = ComponentPropsWithRef<"input">;

export function Checkbox({ className = "default", name }: CheckboxProps) {
  const customCheckboxRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const toggleCheckbox = () => {
      if (!customCheckboxRef.current) {
        return;
      }
      const isChecked = customCheckboxRef.current?.ariaChecked === "true";
      customCheckboxRef.current.setAttribute(
        "aria-checked",
        String(!isChecked),
      );
    };

    customCheckboxRef.current?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggleCheckbox();
      }
    });

    return () => {
      customCheckboxRef.current?.removeEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          toggleCheckbox();
        }
      });
    };
  }, []);

  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={styles["sr-only"]}
        tabIndex={-1}
      />
      <span className={styles[className]} ref={customCheckboxRef}></span>
    </>
  );
}
