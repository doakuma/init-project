import React from "react";
import ReactDom from "react-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { CustomButton } from ".";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = (props) => {
  const {
    open,
    handleClose,
    handleConfirm,
    children,
    title,
    useAction = true,
    size = "lg",
    isAlert = false,
    alertContent,
  } = props;

  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={isAlert ? false : true}
      maxWidth={isAlert ? "xs" : size}
    >
      <DialogTitle>
        {title}
        {!isAlert && (
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>
        {isAlert ? (
          <Typography variant={alertContent.variant}>
            {alertContent.label}
          </Typography>
        ) : (
          <>{children}</>
        )}
      </DialogContent>
      {useAction && (
        <DialogActions>
          <CustomButton variant="outlined" label="취소" onClick={handleClose} />
          <CustomButton
            variant="contained"
            label="확인"
            onClick={handleConfirm}
          />
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomModal;
