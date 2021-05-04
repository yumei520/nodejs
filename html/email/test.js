var content = "<html>"+
"<head>"+
"  <meta http-equiv=\"Content-Type\" content=\"text/html\" />"+
"  <title></title>"+
"  <meta charset=\"utf-8\" />"+
"  <style>"+
"    body {"+
"      font: 14px Tahoma, \"微软雅黑\";"+
"      line-height: 1.5;"+
"    }"+
"    #head {"+
"      display: block;"+
"      border-collapse: collapse;"+
"      width: 1200px;"+
"    }"+
"    #history {"+
"      display: none;"+
"      margin-top: 30px;"+
"      border-collapse: collapse;"+
"      width: 1200px;"+
"    }"+
"    th {"+
"      font-size: small;"+
"      border: 1px solid gray;"+
"      background-color: rgb(102, 102, 187);"+
"    }"+
"    td {"+
"      font-size: small;"+
"      width: 400px;"+
"      border: 1px solid gray;"+
"      text-align: center;"+
"    }"+
"    a {"+
"      text-decoration: none;"+
"    }"+
"  </style>"+
"</head>"+
"<body>"+
"  <script src=\"https://cdn.bootcss.com/jquery/3.4.1/jquery.js\"></script>"+
"  <script type=\"text/javascript\">"+
"    $(document).ready(function () {"+
"      var isShow = false;"+
"      var lv;"+
"      $.get(\"http://tips.bpmqas.10.41.241.111.k8sprd-wzs.k8s.wistron.com.cn/tips-heads?input=20210417175i26 \", function (data, status) {"+
"        console.log(data);"+
"        $.get(\"http://tips.bpmqas.10.41.241.111.k8sprd-wzs.k8s.wistron.com.cn/tips-item-history?tipscode=\" + data[0].tipscode, function (da, sta) {"+
"          console.log(da);"+
"          $.each(da, function (index, obj) {"+
"            $(\"#history\").append(\"<tr>\" +"+
"              \"<td>\" + obj[\'tipscode\'] + \"</td>\" +"+
"              \"<td>\" + obj[\'step\'] + \"</td>\" +"+
"              \"<td>\" + obj[\'detail\'] + \"</td>\" +"+
"              \"<td>\" + obj[\'pic\'] + \"</td>\" +"+
"              \"<td>\" + obj[\'picDept\'] + \"</td>\" +"+
"              \"<td>\" + new Date(obj[\'actdate\']).toLocaleDateString() + \"</td>\" +"+
"              \"<td>\" + obj[\'status\'] + \"</td>\" +"+
"              \"<td>\" + obj[\'returnReason\'] + \"</td>\" +"+
"              \"</tr>\");"+
"            if (obj[\'status\'] == \'O\') {"+
"              lv = obj[\'step\'];"+
"              for (var item of data) {"+
"                $(\"#head\").append(\"<tr>\" +"+
"                  \"<td>\" + item.tipscode + \"</td>\" +"+
"                  \"<td>\" + item.type + \"</td>\" +"+
"                  \"<td>\" + item.upph + \"</td>\" +"+
"                  \"<td>\" + item.improvetype + \"</td>\" +"+
"                  \"<td>\" + item.improveitem + \"</td>\" +"+
"                  \"<td>\" + item.person + \"</td>\" +"+
"                  \"<td>\" + item.oee2 + \"</td>\" +"+
"                  \"<td>\" + item.money + \"</td>\" +"+
"                  \"<td>\" + item.upph + \"</td>\" +"+
"                  \"<td>\" + item.nva + \"</td>\" +"+
"                  \"<td>\" + new Date(item.plandate).toLocaleDateString() + \"</td>\" +"+
"                  \"<td>\" + item.pic + \"</td>\" +"+
"                  \"<td>\" + lv + \"</td>\" +"+
"                  \"<td>\" + item.status + \"</td>\" +"+
"                  \"</tr>\");"+
"              }"+
"            }"+
"          });"+
"        });"+
"      });"+
"      $(\"#xx\").click(function () {"+
"        isShow = !isShow;"+
"        isShow ? $(\"#history\").show() : $(\"#history\").hide();"+
"      })"+
"    });"+
"  </script>"+
"  <p>Dear all:</p>"+
"  <p>The inform form the TIPs\'s system information and your TIPs has been cancel."+
"    <br> This is TIPs web address [<a target=\"_blank\""+
"      href=\"https://bpmwtprd.wistron.com/ProcessPortal/launchTaskCompletion?taskId=tw.local.TaskID\">网页链接</a>]"+
"  </p>"+
"  <br>"+
"  <p>This is TIPs detail information</p>"+
"  <div>"+
"    <table id=\"head\">"+
"      <tr>"+
"        <th>编码</th>"+
"        <th>360类型</th>"+
"        <th>domain</th>"+
"        <th>改善类型</th>"+
"        <th>改善项目</th>"+
"        <th colspan=\"5\">效益(人+OEE2+金额+UPPH+NVA)</th>"+
"        <th>planD.D</th>"+
"        <th>执行人</th>"+
"        <th>level</th>"+
"        <th>status</th>"+
"      </tr>"+
"    </table>"+
"    <table id=\"history\">"+
"      <tr>"+
"        <th>编码</th>"+
"        <th>level</th>"+
"        <th>举措细则</th>"+
"        <th>执行人</th>"+
"        <th>执行部门</th>"+
"        <th>实际完成时间</th>"+
"        <th>status</th>"+
"        <th>退件原因</th>"+
"      </tr>"+
"    </table>"+
"    <a href=\"#\" id=\"xx\">查看tips历史签核记录</a>"+
"    <p>If have any question please contact with TIPs\'s stakeholder."+
"      <br> This is a system generated message, please do not reply."+
"    </p>"+
"  </div>"+
"</body>"+
"</html>"
;

console.log(content);