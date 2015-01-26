/**
 * console.js
 *
 * @author xuzhaoyuan 
 * @mail   xuzhaoyuan@baidu.com
 * @date
 */
(function(){
        /**
         ** http://getfirebug.com/wiki/index.php/Console.log
         ** console��ʽ���ַ���
         ** 
         ** Pattern  Type
         ** %s       String
         ** %d, %i   Integer (numeric formatting is not yet supported)
         ** %f/%.xf  Floating point number; x denotes the number of decimal places the number should be rounded to (if ommitted, the number won't be rounded)
         ** %o       Object hyperlink
         ** %c       Style formatting 
         **/

        if(window.console){

            console.info(
                '%c' + [
                    ''
                    , 'һ����ҳ��Ҫ���������Ĺ��̣����ִܵ��û���ǰ��'
                    , 'һλ���ˣ�Ҫ���������ĳɳ�������վ�ڼ���֮�ۣ�'
                    , '̽Ѱ��������ܣ�'
                    , '�����������ս��'
                    , '��Ϊ��������ˣ�'
                    , '����ٶȣ�����ٶ����ţ��㣬����Ӱ�����硣'
                    , ''
                    , '���consoleǰ�����Ȱ�ǰ�˼��������ż����ı��������������ô��������'
                ].join("\n")
                , [
                    'font-size:14px'
                    , 'line-height:28px'
                    , 'color: #0064b0'
                ].join(';')
            );

            console.log(
                [
                    '%c�뽫�����������������䣺\n'
                    , '%o'
                ].join("")
                , [
                    'font-size:14px'
                    , 'line-height:28px'
                    , 'color: #000'
                ].join(';')
                , [
                    [
                        [
                            {'Email': 'hudamin@baidu.com'}
                        ]
                    ]
                ]
            );

            console.log(
                '%c�ʼ��������ԡ�����-ӦƸWebǰ���з�����ʦ-����console������'
                , [
                    'font-size:14px'
                    , 'line-height:28px'
                    , 'color: #f00'
                ].join(';')
            );

            console.log(
                '%cְλ���ܣ�%o'
                , [
                    'font-size:18px'
                    , 'font-weight:bold'
                    , 'line-height:30px'
                    , 'color: #0064b0'
                ].join(';')
                , 'http://www.dwz.cn/fx7w1'
            );

        }
    })();
