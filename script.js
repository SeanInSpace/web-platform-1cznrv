$(document).ready(function () {
  $('#calculateBtn').click(function () {
    const initialInvestment = parseFloat($('#initialInvestment').val());
    const revenue = parseFloat($('#revenue').val());
    const expenses = parseFloat($('#expenses').val());

    if (isNaN(initialInvestment) || isNaN(revenue) || isNaN(expenses)) {
      $('#roi-result').text('Please enter valid numbers for all fields.');
      return;
    }

    const roi =
      ((revenue - expenses - initialInvestment) / initialInvestment) * 100;
    $('#roi-result').text(`ROI: ${roi.toFixed(2)}%`);
  });
});
