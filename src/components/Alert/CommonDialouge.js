import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Icon from "../icon";

const ConfirmAlert = (props) => {
  const dynamicIcon = () => {
    switch (props.status) {
      case "warning":
        return "mdi:warning-circle-outline";
      case "error":
        return "icons8:cancel";
      case "forgot":
        return "mdi:forgot-password";
    }
  };

  const dynamicColor = () => {
    switch (props.status) {
      case "warning":
        return "warning";
      case "error":
        return "error";
      case "forgot":
        return "warning";
    }
  };

  return (
    <Dialog
      open={props.show}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="info-alert-title-img">
        <IconButton
          aria-label="close"
          sx={{ top: 8, right: 10, position: "absolute", color: "grey.500" }}
          onClick={props.onClose}
        >
          <Icon icon="mdi:close" />
        </IconButton>
        {props?.status ? (
          <IconButton aria-label="capture screenshot" color={dynamicColor()}>
            <Icon
              icon={dynamicIcon()}
              color="error"
              fontSize="4rem"
              sx={{
                textAlign: "center",
                margin: "0 auto",
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        ) : null}
        {props?.title && (
          <DialogTitle id="alert-dialog-title">{props?.title}</DialogTitle>
        )}
      </div>
      {props?.body && (
        <DialogContent>
          <DialogContentText
            variant="h4"
            id="alert-dialog-description"
            className="info-alert-body-text"
          >
            {props.body}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions
        className="dialog-actions-dense"
        sx={{ textAlign: "center", margin: "0 auto" }}
      >
        <LoadingButton
          color="primary"
          type="submit"
          loading={props.loading}
          loadingPosition="start"
          variant="contained"
          sx={{ mr: 3 }}
          onClick={props.onConfirm}
          startIcon={<Icon icon={dynamicIcon() || "mdi:delete-outline"} />}
        >
          {props?.buttonConfirmText || "Remove"}
        </LoadingButton>

        {props?.hideCancel !== true && (
          <Button
            onClick={props.onClose}
            autoFocus
            variant="contained"
            color="secondary"
            startIcon={<Icon icon="mdi:close" />}
          >
            {props?.buttonCancelText || "Cancel"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmAlert;
