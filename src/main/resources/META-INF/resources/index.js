if (!!window.EventSource) {

    var eventSource = new EventSource("/transaction/stream");

    eventSource.onmessage = function(event) {

        data = JSON.parse(event.data);
        console.log("data"+JSON.stringify(data));

        var rowHeader = ' <li class="pf-c-data-list__item" aria-labelledby="data-list-basic-item-1"><div class="pf-c-data-list__item-row"><div class="pf-c-data-list__item-content">';
        var eventDate = new Date(data.eventTimeStamp);

        var row = '<div class="pf-c-data-list__cell">'+data.caseId+'</div>' + '<div class="pf-c-data-list__cell">'+data.status+'</div>'+'<div>'+eventDate.toString() +'</div>';
        var additionalRow;
        if(data.status == 'Case Data Added') {
            additionalRow = '<div class="pf-c-data-list__item-content"><div class="pf-c-data-list__cell">Case Data</div></div><div class="pf-c-data-list__item-content" style="background:#d5dcde"><div class="pf-c-data-list__cell" style="padding-left:10px">'+JSON.stringify(data.caseData)+'</div></div>'
        }

        if(data.status == 'Comments Added') {
                    additionalRow = '<div class="pf-c-data-list__item-content"><div class="pf-c-data-list__cell">Case Data</div></div><div class="pf-c-data-list__item-content" style="background:#d5dcde"><div class="pf-c-data-list__cell" style="padding-left:10px">'+JSON.stringify(data.caseComments)+'</div></div>'
                }

        if(additionalRow != undefined) {
        $('#tbody').prepend(rowHeader+row+additionalRow+'</div></div></li>');
        }else {
         $('#tbody').prepend(rowHeader+row+'</div></div></li>');
        }
    };



} else {
    window.alert("EventSource not available on this browser.")
}

function checkout(transactionId) {

window.open("/TransactionDetails.html?txnId="+transactionId, '_blank');


}