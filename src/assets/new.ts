// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;
// hla-matching.service.ts

type HLAAllele = string;

interface HLATyping {
  hlaA: [HLAAllele, HLAAllele];
  hlaB: [HLAAllele, HLAAllele];
  hlaDRB1: [HLAAllele, HLAAllele];
}

interface MatchResult {
  matchScore: number; // 0 to 100
  mismatchedLoci: string[];
  isHighRisk: boolean;
  recommendation: string;
}

export class HLAMatchingService {
  private static readonly FULL_MATCH_SCORE = 100;
  private static readonly PARTIAL_MATCH_SCORE = 50;

  public static compareAlleles(alleles1: [HLAAllele, HLAAllele], alleles2: [HLAAllele, HLAAllele]): number {
    const matches = alleles1.filter(a => alleles2.includes(a)).length;
    if (matches === 2) return HLAMatchingService.FULL_MATCH_SCORE;
    if (matches === 1) return HLAMatchingService.PARTIAL_MATCH_SCORE;
    return 0;
  }

  public static calculateMatchScore(recipient: HLATyping, donor: HLATyping): MatchResult {
    let totalScore = 0;
    let mismatchedLoci: string[] = [];

    const loci = ["hlaA", "hlaB", "hlaDRB1"] as const;

    loci.forEach(locus => {
      const score = HLAMatchingService.compareAlleles(recipient[locus], donor[locus]);
      totalScore += score;

      if (score < HLAMatchingService.PARTIAL_MATCH_SCORE) {
        mismatchedLoci.push(locus.toUpperCase());
      }
    });

    const matchScore = Math.round(totalScore / loci.length);
    const isHighRisk = matchScore < 60;