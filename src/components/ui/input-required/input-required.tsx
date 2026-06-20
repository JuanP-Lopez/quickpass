import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input"

type InputRequiredProps = {
  placeholderText: string,
  label: string,
  type: string;
};

export function InputRequired({ placeholderText, label, type }: InputRequiredProps) {
  return (
    <Field>
      <FieldLabel htmlFor="input-required">
        {label} <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        type={type}
        placeholder={placeholderText}
        required
      />
      <FieldDescription>Este campo no puede estar vacío.</FieldDescription>
    </Field>
  )
}
