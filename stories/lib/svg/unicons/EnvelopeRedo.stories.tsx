import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeRedo, EnvelopeRedoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeRedo",
  component: EnvelopeRedo,
} as ComponentMeta<typeof EnvelopeRedo>;

const Template: ComponentStory<typeof EnvelopeRedo> = (
  args: EnvelopeRedoPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeRedo {...args} />
    <EnvelopeRedo {...args} fill="red.500" />
    <EnvelopeRedo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
