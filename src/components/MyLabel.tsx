import { CSSProperties } from "react";
import "./mylabel.css";

export interface LabelProps {
  /**
   * El Label definira el nombre a mostrar
   */
  label: string;
  /**
   * Desde el tamaño 'size' se podrá personalizar el tamaño
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Volver el contenido del label a mayusculas
   */
  allCaps?: boolean;
  /**
   * Soportar cambio de la paleta de colores
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Seleccion de colores
   */
  fontColor?: string;
}

export const MyLabel = (props: LabelProps) => {
  const {
    allCaps = false,
    color = "primary",
    label = "No Label",
    size = "normal",
    fontColor,
  } = props;

  return (
    <span
      className={`label ${size} ${allCaps ? "uppercase" : ""} ${
        color ? "text-" + color : ""
      }`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};
