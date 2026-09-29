/**
 * Automatically routes approval to the requester's manager.
 * Context: ServiceNow Workflow / Flow Designer Action Script
 */
(function execute(inputs, outputs) {
    var requester = inputs.requested_for;
    var manager = '';

    var gr = new GlideRecord('sys_user');
    if (gr.get(requester)) {
        manager = gr.getValue('manager');
    }

    if (manager) {
        outputs.approver = manager;
        outputs.status = 'success';
    } else {
        outputs.status = 'error';
        outputs.error_message = 'No manager found for the requested user.';
    }
})(inputs, outputs);
								