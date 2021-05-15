import toast from 'cogo-toast';
import intl from 'helpers/intlHelper';

const getOptions = (options) => ({
  position: 'top-right',
  options,
});

export const getSuccessToast = (msg, options) =>
  toast.success(intl.formatMessage(msg), getOptions(options));

export const getInfoToast = (msg, options) =>
  toast.info(intl.formatMessage(msg), getOptions(options));

export const getWarnToast = (msg, options) =>
  toast.warn(intl.formatMessage(msg), getOptions(options));

export const getErrorToast = (msg, options) =>
  toast.error(intl.formatMessage(msg), getOptions(options));

export const getLoadingToast = (msg, options) =>
  toast.loading(intl.formatMessage(msg), getOptions(options));
