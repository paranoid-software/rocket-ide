import {Plugster} from '../deps/plugster.js';

class ConnectionPickerPlugster extends Plugster {

    constructor(outlets) {
        super(outlets);
    };

    afterInit() {

        let self = this;

        /*$.get('http://rocket.paranoid.software/health-check', function(response) {
          console.log(response);
          self._.theTimeLabel.text(response.theTime);
        });*/

        self._.connectionPickerButton.webuiPopover({
            title: 'Switch / create connection',
            closeable: true,
            animation: 'fade',
            placement: 'bottom-right',
            arrow: false,
            offsetTop: 10,
            style: 'connection-picker'
        });

        window.api.suscribe('test', function (a) {
            console.log(a);
        });

    }

}

let connectionPickerPlugster = await new ConnectionPickerPlugster({
    connectionPickerButton: {}
}).init();

Plugster.plug(connectionPickerPlugster);
