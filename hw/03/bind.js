Function.prototype.myBind = function (context, ...args) {
  const func = this;

  return function (...newArgs) {
    func.apply(context, [...args, ...newArgs]);
  };
};

function logger(name) {
  console.log(`I output only external context: ${this.item}`);
}

logger.myBind({ item: 'Bind' })();
