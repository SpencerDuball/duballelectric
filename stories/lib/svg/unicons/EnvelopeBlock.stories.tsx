import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeBlock, EnvelopeBlockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeBlock",
  component: EnvelopeBlock,
} as ComponentMeta<typeof EnvelopeBlock>;

const Template: ComponentStory<typeof EnvelopeBlock> = (
  args: EnvelopeBlockPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeBlock {...args} />
    <EnvelopeBlock {...args} fill="red.500" />
    <EnvelopeBlock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
