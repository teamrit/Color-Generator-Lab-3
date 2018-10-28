import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/lab/Slider";
import { styles } from "./styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

export const ColorControl = props => {
  const { label, value, changeHandlerSlider, changeHandlerTextField } = props;
  return (
    <Fragment>
      <div className="row">
        <div className="col-3" />
        <div className="col-1">
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              backgroundColor: label
            }}
          />
        </div>
        <div className="col-8">
          <FormControl
            className={styles.formControl}
            error={value > 255}
            aria-describedby="component-error-text"
          >
            <InputLabel htmlFor="component-error">{label}</InputLabel>
            <Input
              id="component-error"
              value={value}
              onChange={changeHandlerTextField(label)}
            />
            {value > 255 && (
              <FormHelperText id="component-error-text">
                value cannot be greater than 255
              </FormHelperText>
            )}
          </FormControl>
        </div>
      </div>

      <div className="mb-3" />
      <Slider
        classes={{ container: styles.slider }}
        value={value}
        min={0}
        max={255}
        step={1}
        onChange={changeHandlerSlider(label)}
      />
      <div className="mb-5" />
    </Fragment>
  );
};

export default ColorControl;
