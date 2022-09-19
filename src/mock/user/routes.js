import Mock from 'mockjs';

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, 'get', () => {
  let result = {};
  result.code = 0;
  result.data = [
    {
      router: 'root',
      children: [
        {
          router: 'KHD',
          name: '客户端',
          meta: {
            url: 'http://app.workiee.com/portal/index.html#/workplace?openMode=KHD',
          },
          icon: '',
          children: [
            {
              path: '0',
              icon: 'icon-manage_task',
              name: '主页',
              isCurrent: true,
              children: [
                {
                  path: '0-1',
                  name: '工作台',
                  icon: 'icon-img',
                  meta: {
                    url: 'https://www.bilibili.com/',
                  },
                },
                {
                  path: '0-2',
                  name: '个人信息',
                  icon: 'icon-img',
                  meta: {
                    url: 'https://jsonformatter.org/',
                  },
                },
                {
                  path: '0-3',
                  name: '账号管理',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=accoutmanagement',
                  },
                },
              ],
            },
            {
              path: '1',
              icon: 'icon-cmy_message',
              name: '企业中心',
              children: [
                {
                  path: '1-1',
                  name: '企业信息',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=QYxinxi',
                  },
                },
                {
                  path: '1-2',
                  name: '发票信息',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=FPXXCK',
                  },
                },
                {
                  path: '1-3',
                  name: '收货地址',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=SHdizhi',
                  },
                },
                {
                  path: '1-4',
                  name: '联系人',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=Lxiren',
                  },
                },
                {
                  path: '1-5',
                  name: '出货要求',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=CHyaoqiu',
                  },
                },
              ],
            },
            {
              path: '2',
              icon: 'icon-cmy_oa',
              name: '测试测试',
              children: [
                {
                  path: '2-1',
                  name: '测试1',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=test',
                  },
                },
              ],
            },
            {
              path: '3',
              icon: 'icon-sale_manage',
              name: '订单管理',
              children: [
                {
                  path: '3-1',
                  name: '资料列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=ziliaoliebiao',
                  },
                },
                {
                  path: '3-2',
                  name: '询价列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=xunjialiebiao',
                  },
                },
                {
                  path: '3-3',
                  name: '订单列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=khdingdanliebiao',
                  },
                },
                {
                  path: '3-4',
                  name: 'EQ管理',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=KHEQCK',
                  },
                },
              ],
            },
            {
              path: '4',
              icon: 'icon-manage',
              name: '工单管理',
              children: [
                {
                  path: '4-1',
                  name: '工单列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=gongdanliebiao',
                  },
                },
              ],
            },
            {
              path: '5',
              icon: 'icon-manage_doc',
              name: '售后管理',
              children: [
                {
                  path: '5-1',
                  name: '售后订单',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=KHAfterSale',
                  },
                },
                {
                  path: '5-2',
                  name: '短交审核',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=DDSQSH',
                  },
                },
                {
                  path: '5-3',
                  name: '客诉',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=khkesu',
                  },
                },
                {
                  path: '5-4',
                  name: '报废列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=khbaofeiliebiao',
                  },
                },
                {
                  path: '5-5',
                  name: '报废扣款列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=KHCKBFKK',
                  },
                },
                {
                  path: '5-6',
                  name: '品质列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=khpinzhiliebiao',
                  },
                },
                {
                  path: '5-7',
                  name: '扣款列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=khkoukuan',
                  },
                },
              ],
            },
            {
              path: '6',
              icon: 'icon-attendance',
              name: '财务管理',
              children: [
                {
                  path: '6-1',
                  name: '送货列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=kehusonghuoliebiao',
                  },
                },
                {
                  path: '6-2',
                  name: '对账列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=kehuduizhangliebiao',
                  },
                },
                {
                  path: '6-3',
                  name: '待付清单',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=kehudaifuqd',
                  },
                },
                {
                  path: '6-4',
                  name: '已开发票',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=kehuyikaifap',
                  },
                },
                {
                  path: '6-5',
                  name: '延期对账列表',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=khyanqilduizhangiebiao',
                  },
                },
                {
                  path: '6-6',
                  name: '资金管理',
                  icon: 'icon-img',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=kehuzijinguanli',
                  },
                },
              ],
            },
            {
              path: '/KHD/userCenter',
              name: '个人设置',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/ptext/newsilk2//workiee/wext/index.html#/usercenter?imdos=74696D653D32303232303930393230333534352655736572436C6173733D30303032265573657249443D696D6B6A6326557365724E616D653DB9DCC0EDD4B126526F6C65723DC6BDCCA8B9DCC0EDD4B12647656E6465723DC4D0264465703D26746F6B656E3D34353637382673736F3D687474703A2F2F6170702E776F726B6965652E636F6D2F776F726B6965652F4E657753696C6B7765626170692F75737276616C69642E61737078267379736E3D',
              },
            },
            {
              path: '/KHD/messList',
              name: '消息中心',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/workiee/newsilk/index5/#/messList',
              },
            },
            {
              invisible: true,
              path: '/KHD/messDetail/:time',
              name: '通知详情',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/workiee/newsilk/index5/#/messDetail',
              },
            },
            {
              invisible: true,
              path: '/KHD/dbView:time',
              name: '待办详情',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/workiee/newsilk/index5/#/dbView',
              },
            },
          ],
        },
        {
          router: 'imdosOther',
          name: '我的',
          children: [
            {
              path: '0',
              icon: 'icon-manage_task',
              name: '工作任务管理',
              isCurrent: true,
              children: [
                {
                  path: '0-1',
                  name: '待处理流程',
                  icon: 'icon-flow',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=flowtoprocess',
                  },
                },
                {
                  path: '0-2',
                  name: '已处理流程',
                  icon: 'icon-flow',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=hadproFlow',
                  },
                },
              ],
            },
            {
              path: '1',
              icon: 'icon-cmy_message',
              name: '我的工具',
              children: [
                {
                  path: '1-1',
                  name: '个性化设置',
                  icon: 'icon-settings',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=SystemUserModuleSet',
                  },
                },
                {
                  path: '1-2',
                  name: '个人资料',
                  icon: 'icon-pen',
                  meta: {
                    url: '../moduleclub/moduleShow.aspx?ShowType=persional&MyEnt=&MyTeam=&ModuleName=PersionalMartial',
                  },
                },
              ],
            },
            {
              path: '/imdosOther/userCenter',
              name: '个人设置',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/ptext/newsilk2//workiee/wext/index.html#/usercenter?imdos=74696D653D32303232303930393230333534352655736572436C6173733D30303032265573657249443D696D6B6A6326557365724E616D653DB9DCC0EDD4B126526F6C65723DC6BDCCA8B9DCC0EDD4B12647656E6465723DC4D0264465703D26746F6B656E3D34353637382673736F3D687474703A2F2F6170702E776F726B6965652E636F6D2F776F726B6965652F4E657753696C6B7765626170692F75737276616C69642E61737078267379736E3D',
              },
            },
            {
              path: '/imdosOther/messList',
              name: '消息中心',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/workiee/newsilk/index5/#/messList',
              },
            },
            {
              invisible: true,
              path: '/imdosOther/messDetail/:time',
              name: '通知详情',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/workiee/newsilk/index5/#/messDetail',
              },
            },
            {
              invisible: true,
              path: '/imdosOther/dbView:time',
              name: '待办详情',
              meta: {
                invisible: true,
                url: 'http://app.workiee.com/workiee/newsilk/index5/#/dbView',
              },
            },
          ],
        },
        {
          router: 'shareview',
        },
      ],
    },
  ];
  // result.data = [{
  //   router: 'root',
  //   children: [
  //     {
  //       router:'shareView'
  //     },
  //     {
  //       router: 'dashboard',
  //       children: ['workplace', 'analysis'],
  //     },
  //     {
  //       router: 'form',
  //       children: ['stepForm', 'advanceForm']
  //     },
  //     {
  //       router: 'basicForm',
  //       name: '子系统3',
  //       icon: 'file-excel',
  //       children:['advance','table','list','queryList'],
  //       authority: 'queryForm'
  //     },
  //     // {
  //     //   router: 'antdv',
  //     //   path: 'antdv',
  //     //   name: 'Ant Design Vue',
  //     //   icon: 'ant-design',
  //     //   link: 'https://www.antdv.com/docs/vue/introduce-cn/'
  //     // },
  //     // {
  //     //   router: 'document',
  //     //   path: 'document',
  //     //   name: '使用文档',
  //     //   icon: 'file-word',
  //     //   link: 'https://iczer.gitee.io/vue-antd-admin-docs/'
  //     // }
  //   ]
  // }]
  return result;
});
