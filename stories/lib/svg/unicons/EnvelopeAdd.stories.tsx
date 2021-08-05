import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeAdd, EnvelopeAddPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeAdd",
  component: EnvelopeAdd,
} as ComponentMeta<typeof EnvelopeAdd>;

const Template: ComponentStory<typeof EnvelopeAdd> = (
  args: EnvelopeAddPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeAdd {...args} />
    <EnvelopeAdd {...args} fill="red.500" />
    <EnvelopeAdd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
