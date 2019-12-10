import { DialogProgrammatic as Dialog } from 'buefy';

class DialogService {

  public error(message: string): void {
    Dialog.alert(this.dialogConfig('danger', message));
  }

  public warning(message: string): void {
    Dialog.alert(this.dialogConfig('warning', message));
  }

  public info(message: string): void {
    Dialog.alert(this.dialogConfig('info', message));
  }

  public question(message: string): void {
    Dialog.confirm({
      title: 'Confirmation',
      message: message,
      cancelText: 'Cancel',
      confirmText: 'OK',
      type: 'is-primary',
      canCancel: true,
      onConfirm: () => { }
    });
  }

  private dialogConfig(level: string, message: string) {
    const config = {
      hasIcon: true,
      iconPack: 'fa',
      ariaRole: 'alertdialog',
      ariaModal: true,
      canCancel: false
    };

    const levelConfig: { [key: string]: any } = {
      'danger': {
        title: 'Error',
        message: message,
        type: 'is-danger',
        icon: 'times-circle'
      },
      'warning': {
        title: 'Warning',
        message: message,
        type: 'is-warning',
        icon: 'exclamation-triangle'
      },
      'info': {
        title: 'Information',
        message: message,
        type: 'is-info',
        icon: 'info-circle'
      }
    };

    return Object.assign(config, levelConfig[level]);
  }
}

export const dialogService: DialogService = new DialogService();
