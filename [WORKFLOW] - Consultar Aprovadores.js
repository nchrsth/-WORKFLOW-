var grWfActivity = new GlideRecord('wf_activity');
// Approval - Users && Workflow Publicado
grWfActivity.addEncodedQuery('activity_definition=35433da80a0a029a0028c639a1e51eb4^workflow_version.published=true')
grWfActivity.query();

while (grWfActivity.next()) {
  var grVariables = new GlideRecord('sys_variable_value');
  // Content Users && Com Valor
  grVariables.addEncodedQuery('document=wf_activity^variable=c35e4cc40a0a0ba96248a7098ec9cb06^valueISNOTEMPTY^document_key=' + grWfActivity.getUniqueValue())
  grVariables.query();
  while (grVariables.next()) {
    gs.log('Workflow -> ' + grWfActivity.workflow_version.getDisplayValue());
    gs.log('Activity -> ' + grWfActivity.name.getDisplayValue());
  	var sysIdApprovers = grVariables.value.toString()
    var grUser = new GlideRecord('sys_user');
    grUser.addEncodedQuery('sys_idIN' + sysIdApprovers);
    grUser.query();
    gs.log('Approvers:\n');
    if (grUser.getRowCount() > 0) {
     while(grUser.next()){
       gs.log(grUser.getDisplayValue())
     }
    } else {
      gs.log(sysIdApprovers)
    }
    gs.log('');
  };
}