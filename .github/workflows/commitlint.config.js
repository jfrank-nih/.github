module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        /^\((#\d+(?:(?:, ){1}#\d+)*)+\)\s(.+)$/
      ),
      headerCorrespondence: ["references", "subject"],
      referenceActions: null,
    }
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { references, subject } = parsed;
          //console.log(references)
          //console.log(subject)
          if (references === null || subject === null) {
            return [
              false,
              "Commit header must be in format '(#issue) subject. You may use (#issue, #issue) if you must.'"
            ];
          }
          return [true, ""];
        },
        "header-beware-commas": (parsed) => {
          const { references, subject } = parsed;
          if(references.find(el => el.raw.indexOf(",") > -1)) {
            return [
              false,
              "We prefer a single issue per commit if possible."
            ];
          }
          return [true, ""];
        },
        "check-pull-request": (parsed) => {
          const prBody = context.payload.pull_request.body
          console.log(prBody)
          return [true, ""];
        }
      },
    },
  ],
  rules: {
    "references-empty": [2, "never"],
    "header-match-team-pattern": [2, "always"],
    "header-beware-commas": [1, "always"],
    "header-min-length": [2, "always", 20],
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "check-pull-request": [2, "always"],
  }
};



