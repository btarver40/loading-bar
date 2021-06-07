import React from "react";
import { render } from '@testing-library/react';
import ProgressBarExercise from "./ProgressBarExercise"

describe('button rendering test', () => {
    it('should render the `Send Request` button', async () => {
      const { findByTestId } = render(<ProgressBarExercise />);
      const button = await findByTestId('send-request');
      expect(button).toBeDefined();
    });
});