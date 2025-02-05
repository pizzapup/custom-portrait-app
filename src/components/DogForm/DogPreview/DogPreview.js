import PreviewImage from "../../../assets/custom-dog";
import {defaultValues} from "../data";

export default function DogPreview({
  values = defaultValues,
  accessory = "none",
  children,
}) {
  return (
    <>
      <div className="dog-preview">
        <PreviewImage.Body
          body={values.body}
          bodyColor={values.bodyColor}
          main={values.bodyColor}
          outlineColor={values.outlineColor}
        />
        <PreviewImage.Eyes
          eyes={values.eyes}
          eyeColor={values.eyeColor}
          outlineColor={values.outlineColor}
        />
        <PreviewImage.Snout
          mouth={values.mouth}
          type={values.nose}
          outlineColor={values.outlineColor}
        />
        {values.accessory !== "none" && (
          <PreviewImage.Accessory accessory={values.accessory} />
        )}
        {accessory !== "none" && (
          <PreviewImage.Accessory accessory={accessory} />
        )}
      </div>
      {children}
    </>
  );
}
