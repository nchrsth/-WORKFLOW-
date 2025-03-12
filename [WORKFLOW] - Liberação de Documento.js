// busca e vincula quem abriu a ritm original para que também receba notificação de aprovação.

var gr = new GlideRecord ('sc_req_item');
gr.addEncodedQuery('number=' + current.variable_pool.doc_ritm_referencia);
gr.query();
if(gr.next()){
    current.watch_list = current.watch_list ? gr.requested_for + ',' + current.watch_list : gr.requested_for;
    current.update();
}