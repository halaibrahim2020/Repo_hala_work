/** @odoo-module */

import { registry } from "@web/core/registry"
import { CharField } from "@web/views/fields/char/char_field"

class UserNameField extends CharField {
    setup(){
        super.setup()
        console.log("Char Field Inherited")
        console.log('this.props',this.props)
    }

    get emailDomain(){
        const {email} = this.props.record.data
        return email ? email.split('@')[1]: ''
    }

}

UserNameField.template = "owl.UsernameField"
UserNameField.supportedTypes = ["char"]
UserNameField.components ={CharField}

registry.category("fields").add("username", UserNameField)
