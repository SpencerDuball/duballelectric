import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeOpen, EnvelopeOpenPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeOpen",
  component: EnvelopeOpen,
} as ComponentMeta<typeof EnvelopeOpen>;

const Template: ComponentStory<typeof EnvelopeOpen> = (
  args: EnvelopeOpenPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeOpen {...args} />
    <EnvelopeOpen {...args} fill="red.500" />
    <EnvelopeOpen {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
