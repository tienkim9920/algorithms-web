const warningField = [
  {
    title: (
      <div
        className="term-content"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></div>
    ),
  },
];

const replaceParamsFunc = (html, info) => {
  Object.keys(info).forEach((key) => {
    const value = info[key];
    const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
    html = html.replace(regex, value);
  });
  setDesc(html);
}

const fetchData = async () => {
  const info = await getParams()
   fetch(BASE_URL + `document/${language}/warningAutoWithDrawal.html`)
    .then((data) => { 
      return data.text();
    })
    .then((html) => {
      replaceParamsFunc(html, info)
    })
    .catch((err) => {
      ToastUtil.error("common.fail-to-load-aggrement-info");
    });
}

const getParams = async () => {
  try {
    const data= await fdsInquiryService.getParamsRegDepositWithdraw()
    const value = data.reduce((acc, item) => {
      acc[item.varname] = item.varvalue;
      return acc;
    }, {});
    return value
  }catch(err) {
    ToastUtil.error(err);
  }
}