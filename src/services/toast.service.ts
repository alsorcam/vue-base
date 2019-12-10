import { ToastProgrammatic as Toast } from 'buefy';

class ToastService {

  public error(message: string): void {
    Toast.open(this.toastConfig('danger', message));
  }

  public warning(message: string): void {
    Toast.open(this.toastConfig('warning', message));
  }

  public info(message: string): void {
    Toast.open(this.toastConfig('info', message));
  }

  private toastConfig(level: string, message: string) {
    const config = {
      position: 'is-top',
      duration: 1200,
      queue: false
    };

    const levelConfig: { [key: string]: any } = {
      'danger': {
        message: message,
        type: 'is-danger'
      },
      'warning': {
        message: message,
        type: 'is-warning'
      },
      'info': {
        message: message,
        type: 'is-info'
      }
    };

    return Object.assign(config, levelConfig[level]);
  }
}

export const toastService: ToastService = new ToastService();
