export const datePicker = () => $(function () {
    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
    }).on("change", function (e) {
        button.disabled = false;
        button.innerText = 'Отправить заявку на перевозку'
    });;
});

// export const datePickerListener = (button) =>
//     $('#datepicker').datepicker()
//         .on("change", function (e) {
//             button.disabled = false;
//             button.innerText = 'Отправить заявку на перевозку'
//         });
