const instance_skel = require('../../instance_skel')
const marshallsmonitor = require('./src/marshallsmonitor')

class instance extends instance_skel {

    /**
	 * Create an instance of the module
	 *
	 * @param {EventEmitter} system - the brains of the operation
	 * @param {string} id - the instance ID
	 * @param {Object} config - saved user configuration parameters
	 * @since 1.0.0
	 */

	constructor(system,id,config) {
		super(system,id,config);
	}

	updateConfig(config) {
        this.config = config;
    }

    config_fields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: "Marshall Monitor's IP",
				width: 6,
				regex: this.REGEX_IP,
			},
		]
	}

    

    init() {
		// let self = this

		// self.status(self.STATUS_UNKNOWN)

		// let host_ip = self.config.host

		// self.marshallsMonitor = new MarshallsMonitor(host_ip)

		// try {
		// 	self.marshallsMonitor.checkMarshallsConnection()
		// } catch(err) {
		// 	console.log(err)
		// 	this.status(this.STATUS_ERROR)
		// 	throw err
		// }

		self.status(this.STATUS_OK)
	}

    

	destroy() {
		this.debug('destroy')
	}

}

exports = module.exports = instance;


// Custom Variables Handling
// this.customVariables = {}
// 		system.emit('custom_variables_get', this.updateCustomVariables)
// 		system.on('custom_variables_update', this.updateCustomVariables)

// 		this.actions() // export actions

//         updateCustomVariables = (variables) => {
//             this.customVariables = variables
//             this.actions()
//         }
    