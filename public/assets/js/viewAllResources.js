$(document).ready(function () {
    $.ajax("/getResourcesTotal", {
        type: "POST"
    }).then(
        function (result) {
            $("#all-resources-allocations").empty();
            for (i = 0; i < result.length; i++) {
                $("#all-resources-allocations").append($
                    ("<tr><td class=align-left>" + result[i].resource_name + "</td>"
                    + "<td class=align-left>" + result[i].resource_role + "</td>"
                    + "<td class=align-left>" + result[i].resource_location + "</td>"
                    + "<td>" + numeral(result[i].resource_runrate).format('$0,0') + "</td>"
                    + "<td>" + numeral(result[i].january / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].february / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].march / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].april / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].may / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].june / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].july / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].august / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].september / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].october / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].november / 100).format('0%') + "</td>"
                    + "<td>" + numeral(result[i].december / 100).format('0%') + "</td>"
                    + "<td class=boldme>" + numeral(result[i].totalFTE / 12 / 100).format('0.0') + "</td></tr>"
                    ))
            }
            $('table td:nth-child(5), :nth-child(6), :nth-child(7), :nth-child(8), :nth-child(9), :nth-child(10), :nth-child(11), :nth-child(12), :nth-child(13), :nth-child(14), :nth-child(15), :nth-child(16)').each(function () {
                var alloc = parseInt($(this).text())
                if (alloc === 100) {
                    $(this).css('backgroundColor', '#0000FF'); // Blue
                }
                else if (alloc === 0) {
                    $(this).css('backgroundColor', '#808080'); // Gray
                }
                else if (alloc < 100) {
                    $(this).css('backgroundColor', '#008000'); // Green
                }
                else if (alloc > 100) {
                    $(this).css('backgroundColor', '#FF0000'); // Red
                }
            });
            return false;
        });
});

$(document).ready(function () {
    $.ajax("/getAllTotals", {
        type: "POST"
    }).then(
        function (result) {
            $("#all-resources-allocations").append($
                ("<tr><td class=boldme>Totals</td>"
                + "<td></td>"
                + "<td></td>"
                + "<td></td>"
                + "<td class=boldme>" + numeral(result[0].janTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].febTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].marTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].aprTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].mayTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].junTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].julTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].augTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].sepTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].octTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].novTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].decTotal / 100).format('0.00') + "</td>"
                + "<td class=boldme>" + numeral(result[0].totalAllFTE / 12 / 100).format('0.00') + "</td></tr>"
                ))
        });
});

