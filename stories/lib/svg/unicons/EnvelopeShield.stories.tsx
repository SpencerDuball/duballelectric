import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeShield, EnvelopeShieldPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeShield",
  component: EnvelopeShield,
} as ComponentMeta<typeof EnvelopeShield>;

const Template: ComponentStory<typeof EnvelopeShield> = (
  args: EnvelopeShieldPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeShield {...args} />
    <EnvelopeShield {...args} fill="red.500" />
    <EnvelopeShield {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
