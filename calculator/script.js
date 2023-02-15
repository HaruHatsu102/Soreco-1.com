function Calculate(){
    var suggestions = [];

        //appliance[ac]
    var acNo = document.getElementById("ac").value;
    var acHour = document.getElementById("acHour").value;
    var acDaily = document.getElementById("acDaily").value;
    var acPower = document.getElementById("acs").value;
    var acMaxPower = 25000;
    var totalAcHour = acNo * acPower;
    var acday = totalAcHour * acHour;
    var acMonth = acday * acDaily/1000;

    //appliance[Tv]
    var tvNo = document.getElementById("tv").value;
    var tvHour = document.getElementById("tvHour").value;
    var tvDaily = document.getElementById("tvDaily").value;
    var tvPower = document.getElementById("tvs").value;
    var tvMaxPower = 350;
    var totaltvHour = tvNo * tvPower;
    var tvday = totaltvHour * tvHour;
    var tvMonth = tvday * tvDaily/1000;

    //appliance[fridge]
    var fridgeNo = document.getElementById("fridge").value;
    var fridgeHour = document.getElementById("fridgeHour").value;
    var fridgeDaily = document.getElementById("fridgeDaily").value;
    var fridgePower = document.getElementById("fridges").value;
    var fridgeMaxPower = 6000;
    var totalfridgeHour = fridgeNo * fridgePower;
    var fridgeday = totalfridgeHour * fridgeHour;
    var fridgeMonth = fridgeday * fridgeDaily/1000;

    //appliance[WashingMachine]
    var wmNo = document.getElementById("wm").value;
    var wmHour = document.getElementById("wmHour").value;
    var wmDaily = document.getElementById("wmDaily").value;
    var wmPower = document.getElementById("wms").value;
    var wmMaxPower = 600;
    var totalwmHour = wmNo * wmPower;
    var wmday = totalwmHour * wmHour;
    var wmMonth = wmday * wmDaily/1000;

     //appliance[fans]
     var fansNo = document.getElementById("fans").value;
     var fansHour = document.getElementById("fansHour").value;
     var fansDaily = document.getElementById("fansDaily").value;
     var fansPower = document.getElementById("fan").value;
     var fansMaxPower = 5000;
     var totalfansHour = fansNo * fansPower;
     var fansday = totalfansHour * fansHour;
     var fansMonth = fansday * fansDaily/1000;

    //appliance[cfan]
    var cfanNo = document.getElementById("cfans").value;
    var cfanHour = document.getElementById("cfansHour").value;
    var cfanDaily = document.getElementById("cfansDaily").value;
    var cfanPower = document.getElementById("cfan").value;;
    var cfanMaxPower = 6000;
    var ctotalfanHour = cfanNo * cfanPower;
    var cfanday = ctotalfanHour * cfanHour;
    var cfanMonth = cfanday * cfanDaily/1000;

    //appliance[microwave]
    var microNo = document.getElementById("micro").value;
    var microHour = document.getElementById("microHour").value;
    var microDaily = document.getElementById("microDaily").value;
    var microPower = document.getElementById("microwave").value;
    var microMaxPower = 5000;
    var totalmicroHour = microNo * microPower;
    var microday = totalmicroHour * microHour;
    var microMonth = microday * microDaily/1000;

    //appliance[mix]
    var mixNo = document.getElementById("mix").value;
    var mixHour = document.getElementById("mixHour").value;
    var mixDaily = document.getElementById("mixDaily").value;
    var mixPower = document.getElementById("mixes").value;
    var mixMaxPower = 5000;
    var totalmixHour = mixNo * mixPower;
    var mixday = totalmixHour * mixHour;
    var mixMonth = mixday * mixDaily/1000;

    //appliance[ranger]
    var rangerNo = document.getElementById("ranger").value;
    var rangerHour = document.getElementById("rangerHour").value;
    var rangerDaily = document.getElementById("rangerDaily").value;
    var rangerPower = document.getElementById("rangers").value;
    var rangerMaxPower = 5000;
    var totalrangerHour = rangerNo * rangerPower;
    var rangerday = totalrangerHour * rangerHour;
    var rangerMonth = rangerday * rangerDaily/1000;

    //appliance[ricecooker]
    var ricecookerNo = document.getElementById("ricecooker").value;
    var ricecookerHour = document.getElementById("ricecookerHour").value;
    var ricecookerDaily = document.getElementById("ricecookerDaily").value;
    var ricecookerPower = document.getElementById("ricecookers").value;
    var ricecookerMaxPower = 5000;
    var totalricecookerHour = ricecookerNo * ricecookerPower;
    var ricecookerday = totalricecookerHour * ricecookerHour;
    var ricecookerMonth = ricecookerday * 30/1000;

    //appliance[drink]
    var drinkNo = document.getElementById("drink").value;
    var drinkHour = document.getElementById("drinkHour").value;
    var drinkDaily = document.getElementById("drinkDaily").value;
    var drinkPower = document.getElementById("drinks").value;
    var drinkMaxPower = 5000;
    var totaldrinkHour = drinkNo * drinkPower;
    var drinkday = totaldrinkHour * drinkHour;
    var drinkMonth = drinkday * drinkDaily/1000;

    //appliance[comp]
    var compNo = document.getElementById("comp").value;
    var compHour = document.getElementById("compHour").value;
    var compDaily = document.getElementById("compDaily").value;
    var compPower = document.getElementById("computer").value;
    var compMaxPower = 6000;
    var totalcompHour = compNo * compPower;
    var compday = totalcompHour * compHour;
    var compMonth = compday * compDaily/1000;

    //appliance[peripheral]
    var peripheralNo = document.getElementById("peripheral").value;
    var peripheralHour = document.getElementById("peripheralHour").value;
    var peripheralDaily = document.getElementById("peripheralDaily").value;
    var peripheralPower = document.getElementById("peripherals").value;
    var peripheralMaxPower = 25000;
    var totalperipheralHour = peripheralNo * peripheralPower;//1700
    var peripheralday = totalperipheralHour * peripheralHour;
    var peripheralMonth = peripheralday * peripheralDaily/1000;

    //appliance[bulb]
    var blbNo = document.getElementById("blb").value;
    var blbHour = document.getElementById("blbHour").value;
    var blbDaily = document.getElementById("blbDaily").value;
    var blbPower = document.getElementById("blbs").value;
    var blbMaxPower = 950;
    var totalblbHour = blbNo * blbPower;
    var blbday = totalblbHour * blbHour;
    var blbMonth = blbday * blbDaily/1000;

   
    //appliance[Clothing]
    var clothingNo = document.getElementById("clothing").value;
    var clothingHour = document.getElementById("clothingHour").value;
    var clothingDaily = document.getElementById("clothingDaily").value;
    var clothingPower = document.getElementById("clothes").value;
    var clothingMaxPower = 6000;
    var totalclothingHour = clothingNo * clothingPower;
    var clothingday = totalclothingHour * clothingHour;
    var clothingMonth = clothingday * clothingDaily/1000;

    //appliance[Light]
    var lightNo = document.getElementById("light").value;
    var lightHour = document.getElementById("lightHour").value;
    var lightDaily = document.getElementById("lightDaily").value;
    var lightPower = document.getElementById("lights").value;
    var lightMaxPower = 1000;
    var totallightHour = lightNo * lightPower;
    var lightday = totallightHour * lightHour;
    var lightMonth= lightday * lightDaily/1000;


    var elRate = document.getElementById("elRate").value;
    var totalUsage = 0;

    document.getElementById("acday").innerHTML = acday/1000;
    document.getElementById("acMonth").innerHTML = (acday/1000)*acDaily;
    document.getElementById("acmnSpnt").innerHTML = (acday/1000)*acDaily*elRate;

    totalUsage += (acday/1000)*acDaily;

    if (acday > acMaxPower) {
        suggestions.push("You should Decrease the Usage of A/c or you should buy an Ac with more efficient power usage ")
    };

    document.getElementById("tvday").innerHTML = tvday/1000;
    document.getElementById("tvMonth").innerHTML = (tvday/1000)*tvDaily;    
    document.getElementById("tvmnSpnt").innerHTML = (tvday/1000)*tvDaily*elRate;

    totalUsage += (tvday/1000)*tvDaily;

    if (tvday > tvMaxPower) {
        suggestions.push("You should Decrease the Usage of TV or you should buy a Tv with more efficient power usage ")
    };

    document.getElementById("fridgeday").innerHTML = fridgeday/1000;
    document.getElementById("fridgeMonth").innerHTML = (fridgeday/1000)*fridgeDaily;
    document.getElementById("fridgemnSpnt").innerHTML = (fridgeday/1000)*fridgeDaily*elRate;

    totalUsage += (fridgeday/1000)*fridgeDaily;

    if (fridgeday > fridgeMaxPower) {
        suggestions.push("You should Decrease the Usage of Fridge or you should buy a fridge with more efficient power usage ")
    };

    document.getElementById("wmday").innerHTML = wmday/1000;
    document.getElementById("wmMonth").innerHTML = (wmday/1000)*wmDaily;
    document.getElementById("wmmnSpnt").innerHTML = (wmday/1000)*wmDaily*elRate;

    totalUsage += (wmday/1000)*wmDaily;

    if (wmday > wmMaxPower) {
        suggestions.push("You should Decrease the Usage of Washing Machine or you should buy a washing Machine with more efficient power usage ")
    };

    document.getElementById("cfanday").innerHTML = cfanday/1000;
    document.getElementById("cfanMonth").innerHTML = (cfanday/1000)*cfanDaily;
    document.getElementById("cfanmnSpnt").innerHTML = (cfanday/1000)*cfanDaily*elRate;

    totalUsage += (cfanday/1000)*cfanDaily;


    if (cfanday > cfanMaxPower) {
        suggestions.push("You should Decrease the Usage of Geyser or you should buy a geyser with more efficient power usage ")
    };

    document.getElementById("microday").innerHTML = microday/1000;
    document.getElementById("microMonth").innerHTML = (microday/1000)*microDaily;
    document.getElementById("micromnSpnt").innerHTML = (microday/1000)*microDaily*elRate;

    totalUsage += (microday/1000)*microDaily;

    if (microday > microMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("mixday").innerHTML = mixday/1000;
    document.getElementById("mixMonth").innerHTML = (mixday/1000)*mixDaily;
    document.getElementById("mixmnSpnt").innerHTML = (mixday/1000)*mixDaily*elRate;

    totalUsage += (mixday/1000)*mixDaily;

    if (mixday > mixMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("rangerday").innerHTML = rangerday/1000;
    document.getElementById("rangerMonth").innerHTML = (rangerday/1000)*rangerDaily;
    document.getElementById("rangermnSpnt").innerHTML = (rangerday/1000)*rangerDaily*elRate;

    totalUsage += (rangerday/1000)*rangerDaily;

    if (rangerday > rangerMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    
    document.getElementById("ricecookerday").innerHTML = ricecookerday/1000;
    document.getElementById("ricecookerMonth").innerHTML = (ricecookerday/1000)*ricecookerDaily;
    document.getElementById("ricecookermnSpnt").innerHTML = (ricecookerday/1000)*ricecookerDaily*elRate;

    totalUsage += (ricecookerday/1000)*ricecookerDaily;

    if (ricecookerday > ricecookerMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("drinkday").innerHTML = drinkday/1000;
    document.getElementById("drinkMonth").innerHTML = (drinkday/1000)*drinkDaily;
    document.getElementById("drinkmnSpnt").innerHTML = (drinkday/1000)*drinkDaily*elRate;

    totalUsage += (drinkday/1000)*drinkDaily;  

    if (drinkday > drinkMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("compday").innerHTML = compday/1000;
    document.getElementById("compMonth").innerHTML = (compday/1000)*compDaily;
    document.getElementById("compmnSpnt").innerHTML = (compday/1000)*compDaily*elRate;

    totalUsage += (compday/1000)*compDaily;

    if (compday > compMaxPower) {
        suggestions.push("You should Decrease the Usage of computer or you should buy a computer with more efficient power usage ")
    };

    document.getElementById("peripheralday").innerHTML = peripheralday/1000;
    document.getElementById("peripheralMonth").innerHTML = (peripheralday/1000)*peripheralDaily;
    document.getElementById("peripheralmnSpnt").innerHTML = (peripheralday/1000)*peripheralDaily*elRate;

    totalUsage += (peripheralday/1000)*peripheralDaily;

    if (peripheralday > peripheralMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("blbday").innerHTML = blbday/1000;
    document.getElementById("blbMonth").innerHTML = (blbday/1000)*blbDaily;
    document.getElementById("blbmnSpnt").innerHTML = (blbday/1000)*blbDaily*elRate;

    totalUsage += (blbday/1000)*blbDaily;

    if (blbday > blbMaxPower) {
        suggestions.push("You should Turn off the bulbs when not in use or use the bulbs which are more power efficient ")
    };

    document.getElementById("fanday").innerHTML = fansday/1000;
    document.getElementById("fanMonth").innerHTML = (fansday/1000)*fansDaily;
    document.getElementById("fanmnSpnt").innerHTML = (fansday/1000)*fansDaily*elRate;

    totalUsage += (fansday/1000)*fansDaily;

    if (fansday > fansMaxPower) {
        suggestions.push("You should Turn off the fans when not in use or use the fans which are more power efficient ")
    };

   

    document.getElementById("clothingday").innerHTML = clothingday/1000;
    document.getElementById("clothingMonth").innerHTML = (clothingday/1000)*clothingDaily;
    document.getElementById("clothingmnSpnt").innerHTML = (clothingday/1000)*clothingDaily*elRate;

    totalUsage += (clothingday/1000)*clothingDaily;


    if (clothingday > clothingMaxPower) {
        suggestions.push("You should Decrease the Usage of Induction cooker or you should buy an Induction cookerwith more efficient power usage")
    };

    document.getElementById("lightday").innerHTML = lightday/1000;
    document.getElementById("lightMonth").innerHTML = (lightday/1000)*lightDaily;
    document.getElementById("lightmnSpnt").innerHTML = (lightday/1000)*lightDaily*elRate;

    totalUsage += (lightday/1000)*lightDaily;


    if (lightday > lightMaxPower) {
        suggestions.push("Turn off the tubelights when not in use or use the Tubes which are more power efficient ")
    };

    



    if (suggestions.length == 0) {
        document.getElementById("sgst").innerHTML = "You dont need any suggestions, you are using electricity wisely! ⚡"
    } else {
        document.getElementById("sgst").innerHTML = suggestions.join("<br>") + "</p> Rest is well 😊</p>";
    }

    //Now begins the code for calculating total expenses and usage.... 
    document.getElementById("ttlpwr").innerHTML = "Total electricity usage (in kilowatt) : " + totalUsage;
    document.getElementById("emCost").innerHTML = "Estimated bill amount : " + totalUsage * elRate;
    
    if (elRate == 0) {
        alert("Please enter the Price of electricity")
    }
    
        // var appliances = ["1","2","3"]
        var appliances2 = ["A/c","tv","fridge","Washing-Machine","Otherfan","Microwave","Mix","Ranger","Rice-Cooker","Drink","Computer","Peripheral","Bulb","fans","Clothing","Light"];
        var values = [acMonth,tvMonth,fridgeMonth,wmMonth,cfanMonth,microMonth,mixMonth,rangerMonth,ricecookerMonth,drinkMonth,compMonth,peripheralMonth,blbMonth,fansMonth,clothingMonth,lightMonth];
        var color = ["#f0f01a","#0000ff","#25D086","#ff0000","#ffffff","#00ffff","#8080ff","#8080f8","#8020f8","#8020f8","#8020f8","#805454","#408080","#ff0080","#804040","#008040"]
        new Chart("chart", {
            type: "pie",
            data: {
              labels: appliances2,
              datasets: [{
                backgroundColor: color,
                data: values
              }]
            },
            options: {
              title: {
                display: true,
                text: "Graphical representation of your Electricity usage per appliance 📊"
              }
            }
          });
         document.getElementById("scr").style.display = "block";

    }


