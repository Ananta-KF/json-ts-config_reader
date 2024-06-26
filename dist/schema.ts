/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AssessmentProviders = "KFAssess" | "ConfirmIt" | "Hiremee" | "ConfirmItCompetency" | "Assess1";

/**
 * Assessment event payload
 */
export interface ComKfIc2AssessmentEventAssess1 {
  assessmentProvider: AssessmentProviders;
  postbackId?: string | null;
  overallStatus: string;
  event: string;
  assessmentId?: string | null;
  assessmentStatus?: string | null;
  reportType?: string | null;
  Assessment?: string | null;
  deliveryCount?: number;
}
