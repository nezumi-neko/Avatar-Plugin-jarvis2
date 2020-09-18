'use strict';

// Ce module vérifie prépare l'objet data envoyé au plugin

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
		
		for (var rule in Config.modules.jarvis2.rules) {
			var match = (0, _helpers.syntax)(state.sentence, Config.modules.jarvis2.rules[rule]); 
			if (match) break;
		}
		
		// Décommentez si vous voulez rechercher une pièce dans la phrase.
		//let room = Avatar.ia.clientFromRule (state.rawSentence);
		
		setTimeout(function(){ 
			if (match) {
				
				var value, tts = false;
				if (Config.modules.jarvis2.tts_action[rule]) {
					value = Config.modules.jarvis2.tts_action[rule]
					tts = true;
				}
				
				if (state.debug) info('Actionjarvis2'.bold.yellow, 'action:', rule.yellow);
				
					state.action = {
						module: 'jarvis2',
						command: rule,
						value: value,	
					};	
			}		
				
			resolve(state);	
		}, 500);
	});
};

