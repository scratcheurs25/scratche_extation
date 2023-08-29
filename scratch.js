class JS{
    constructor(){
    }
    getInfo(){
      return{
        "id": "js",
        "name": "js",
        "blocks": [{
          "opcode": "js",
          "blockType": "command",
          "text": "use [eventType] avec [b] comme args",
          "arguments": {
            "b": {
              "type": "string",
              "defaultValue": "hello word"
            },
            "eventType": {
              "type": "number",
              "defaultValue": "1",
              "menu": "event"
             },
          },
        },
      ],
      "menus": {
        "event": [{text:"alert",value:1}, {text:"console.log",value:0}],
    }
    };
    }
    js({eventType,b}){
        if (eventType == 1){
          alert(b)
        }else{
            console.log(b)
        }
    }
}

//exetantion
(function() {
    var extensionInstance = new JS(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()