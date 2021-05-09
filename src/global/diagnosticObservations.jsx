//prefix 1 - percent; 2 - dollar; 3 - number; 4 - none

export const observations = [
  {
    name: "Performance",
    data: [
      { field: "Return Of Investment", code: "D1", prefix: 1 },
      { field: "Return Of Assets", code: "D2", prefix: 1 },
    ],
  },
  {
    name: "Fid. Exposure",
    data: [
      {
        field: "QDIA with Fiduciary Exposure",
        code: "D63",
      },
      { field: "QDIA Feature", code: "D64" },
    ],
  },
  {
    name: "Talent Rentention",
    data: [
      { field: "Controlled Group", code: "D65" },
      { field: "Life Insurance", code: "D66" },
      { field: "ESOP", code: "D67" },
    ],
  },

  {
    name: "Retirement Readiness",
    data: [
      { field: "403B", code: "D68" },
      {
        field: "Plan Usage (Auto-enrollment)",
        code: "D69",
      },
      {
        field: "Retirement Readiness with QDIA",
        code: "D70",
      },

      { field: "Employer Match Program", code: "D71" },

      { field: "Directed Brokerage", code: "D72" },

      { field: "Equity Interest", code: "D73" },
      { field: "Equity Interest Compliance", code: "D74" },
    ],
  },
  {
    name: "Active Particip.",
    data: [
      {
        field: "Average Active Participants",
        code: "D6",
        prefix: 3,
      },
      { field: "Active Participants", code: "D3", prefix: 3 },
      {
        field: "Participants With Benefit Account",
        code: "D5",
        prefix: 3,
      },
    ],
  },
  {
    name: "Plan Assets",
    data: [
      { field: "Average Assets", code: "D12", prefix: 2 },
      {
        field: "Average Participant Balance",
        code: "D18",
        prefix: 2,
      },
      {
        field: "Separated Vested Participants",
        code: "D4",
        prefix: 3,
      },
    ],
  },

  {
    name: "Contributions",
    data: [
      { field: "Total Contributions", code: "D7", prefix: 2 },
      {
        field: "Contribution Yield",
        code: "D11",
        prefix: 1,
      },
      {
        field: "Employee Contributions",
        code: "D9",
        prefix: 1,
      },

      { field: "Participant Contributions", code: "D10", prefix: 1 },

      {
        field: "Total Contributions Participant",
        code: "D8",
        prefix: 2,
      },

      {
        field: "Participant Contribution By Participant",
        code: "D19",
        prefix: 1,
      },
      {
        field: "Employer Contribution By Participant",
        code: "D20",
        prefix: 1,
      },
    ],
  },

  {
    name: "Leakage",
    backward: true,
    data: [
      { field: "Total Loans", code: "D15", prefix: 2 },
      {
        field: "Loan/Participants",
        code: "D14",
        prefix: 2,
      },
      {
        field: "Loans/Assets",
        code: "D13",
        prefix: 1,
      },

      { field: "Total Distbibutions", code: "D16" },

      {
        field: "Distributions/Participant",
        code: "D26",
      },

      {
        field: "Distribution/Assets",
        code: "D17",
        prefix: 1,
      },
    ],
  },

  {
    name: "Plan Expenses",
    backward: true,

    data: [
      { field: "Total Expenses", code: "D23" },
      {
        field: "Cost/Participants",
        code: "D24",
        prefix: 2,
      },
      {
        field: "Expense Ratio",
        code: "D25",
        prefix: 1,
      },
    ],
  },

  {
    name: "Accountant",
    data: [
      {
        field: "Waiver vs. Total Participants",
        code: "D56",
      },
      {
        field: "Accountant Waiver",
        code: "D59",
      },
      {
        field: "Accountant Opinion",
        code: "D57",
      },
      {
        field: "Accountant Audit Scope",
        code: "D58",
      },
      {
        field: "Audit report",
        code: "D79",
      },
    ],
  },

  // {
  //   name: "Benefits",
  //   data: [
  //     {
  //       field: "Benefit Payment Failure Ind",
  //       code: "D31",
  //     },
  //     {
  //       field: "Benefit Payment Failure Amt",
  //       code: "D32",
  //     },
  //   ],
  // },

  // {
  //   name: "Valuations",
  //   data: [
  //     {
  //       field: "All Plan Asset Distribution Ind",
  //       code: "D27",
  //     },
  //     {
  //       field: "Asset Held Ind",
  //       code: "D28",
  //     },
  //     {
  //       field: "Asset Not Values Ind",
  //       code: "D29",
  //     },
  //     {
  //       field: "Asset Not Values Amt",
  //       code: "D30",
  //     },
  //     {
  //       field: "EligibleAssets",
  //       code: "D55",
  //     },
  //   ],
  // },

  // {
  //   name: "Blackouts",
  //   data: [
  //     {
  //       field: "Blackout Period Ind",
  //       code: "D33",
  //     },
  //     {
  //       field: "Blackout Notice Ind",
  //       code: "D34",
  //     },
  //   ],
  // },

  // {
  //   name: "Concentrations",
  //   data: [
  //     {
  //       field: "Five Percent Ind",
  //       code: "D39",
  //     },
  //     {
  //       field: "Inv Concentration 20 Ind",
  //       code: "D40",
  //     },
  //     {
  //       field: "Inv Concentration 20 Amt",
  //       code: "D41",
  //     },
  //   ],
  // },

  // {
  //   name: "Contributions",
  //   data: [
  //     {
  //       field: "Contribution Failure Ind",
  //       code: "D35",
  //     },

  //     {
  //       field: "Contribution Failure Amt",
  //       code: "D36",
  //     },
  //     {
  //       field: "Contribution Non Cash Ind",
  //       code: "D37",
  //     },

  //     {
  //       field: "Contribution Non Cash Amt",
  //       code: "D38",
  //     },
  //   ],
  // },

  // {
  //   name: "Defaults",
  //   data: [
  //     {
  //       field: "Leases In Default Ind",
  //       code: "D42",
  //     },
  //     {
  //       field: "Leases In Default Amt",
  //       code: "D43",
  //     },

  //     {
  //       field: "Loans In Defaul tInd",
  //       code: "D44",
  //     },

  //     {
  //       field: "Loans In Default Amt",
  //       code: "D45",
  //     },

  //     {
  //       field: "LossDiscoverInd",
  //       code: "D46",
  //     },

  //     {
  //       field: "LossDiscoverAmt",
  //       code: "D47",
  //     },
  //   ],
  // },

  // {
  //   name: "Conflicts",
  //   data: [
  //     {
  //       field: "Party Int Not Reporting Ind",
  //       code: "D48",
  //     },
  //     {
  //       field: "Party Int Not Reporting Amt",
  //       code: "D49",
  //     },
  //   ],
  // },
  // {
  //   name: "Others",
  //   data: [
  //     {
  //       field: "PBGC Insurance Ind",
  //       code: "D50",
  //     },
  //     {
  //       field: "Pension Funding 412 Amt",
  //       code: "D51",
  //     },

  //     {
  //       field: "Reserve Term Ind",
  //       code: "D52",
  //     },

  //     {
  //       field: "Reserve Term Amt",
  //       code: "D53",
  //     },

  //     {
  //       field: "Fidelity Bond Ind",
  //       code: "D54",
  //     },
  //   ],
  // },
];
