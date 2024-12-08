(function(){
    var modules={
        "panel-main-spardac":    	        {url:"$H/m/panel-main.html",router:1},
        "dsst-form-spardac":                    {url:"$H/m/neurocog/dsst-form.html"},
        "finger-tapping6-after-form-spardac":   {url:"$H/m/neurocog/finger-tapping6-after-form.html",task_name:"Finger Tapping - Morning"},
        "finger-tapping-alt-form-spardac":      {url:"$H/m/neurocog/finger-tapping-alt-form.html"},
        "finger-tapping12-before-form-spardac": {url:"$H/m/neurocog/finger-tapping12-before-form.html",task_name:"Finger Tapping - Evening"},
        "finger-tapping12-alt-form-spardac":    {url:"$H/m/neurocog/finger-tapping12-alt-form.html"},
        "letter-cancellation-form-spardac":     {url:"$H/m/neurocog/letter-cancellation-form.html"},
        "nback1-form-spardac":                  {url:"$H/m/neurocog/nback1-form.html",task_name:"1-Back"},
        "nback2-form-spardac":                  {url:"$H/m/neurocog/nback2-form.html",task_name:"2-back"},
        "nback3-form-spardac":                  {url:"$H/m/neurocog/nback3-form.html",task_name:"3-Back"},
        "stroop-colour-form-spardac":           {url:"$H/m/neurocog/stroop-colour-form.html",},
        "stroop-text-form-spardac":             {url:"$H/m/neurocog/stroop-text-form.html"},
        "tower-london-form-spardac":            {url:"$H/m/neurocog/tower-london-form.html"},
        "iapsl-form-spardac":                   {url:"$H/m/iaps/iapsl-form.html",task_name:""},
        "iapsr1-form-spardac":                   {url:"$H/m/iaps/iapsr1-form.html",task_name:""},
        "iapsr2-form-spardac":                   {url:"$H/m/iaps/iapsr2-form.html",task_name:""},
        "iapsle-form-spardac":                   {url:"$H/m/iaps/iapsle-form.html",task_name:""},
        "iapsr1e-form-spardac":                   {url:"$H/m/iaps/iapsr1e-form.html",task_name:""},
        "iapsr2e-form-spardac":                   {url:"$H/m/iaps/iapsr2e-form.html",task_name:""},
        
        "v1e-word-pairs-set1-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "v1e-word-pairs-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "v1e-word-pairs-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "v1e-word-pairs-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "v1e-word-pairs-set2-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-practice.html"},
        "v1e-word-pairs-set2-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial1.html"},
        "v1e-word-pairs-set2-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial2.html"},
        "v1e-word-pairs-set2-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial3.html"},

        "v1m-word-pairs-recall-set1":	            {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "v1m-word-pairs-recall-set2":	            {url:"$H/m/word-pairs/morning-wordpairs-set2.html"},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();
