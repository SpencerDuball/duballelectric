import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeExclamation, EnvelopeExclamationPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeExclamation",
  component: EnvelopeExclamation,
} as ComponentMeta<typeof EnvelopeExclamation>;

const Template: ComponentStory<typeof EnvelopeExclamation> = (
  args: EnvelopeExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeExclamation {...args} />
    <EnvelopeExclamation {...args} fill="red.500" />
    <EnvelopeExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
