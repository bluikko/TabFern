// main_deps.js: The dependencies for main_tl.js.  This is the entryPoint used by
// Brunch to start bundling.

// A static require statement that brunch will pick up on, but that will
// never actually run.  This lists all of the top-level modules not referenced
// in the module.exports array, below.  This is what tells Brunch to
// include these top-level modules.
if((window||global||this||{}).this_var_should_never_ever_exist_bang) {
    require('./main_tl');
}

module.exports = {
    ASQ_orig: require('asynquence'),
    ASQ: require('asynquence-contrib'),
    ASQH: require('lib/asq-helpers'),
    jquery: require('jquery'),
    loglevel: require('loglevel'),
};

// vi: set ts=4 sts=4 sw=4 et ai: //
