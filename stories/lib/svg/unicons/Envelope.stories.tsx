import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Envelope, EnvelopePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Envelope",
  component: Envelope,
} as ComponentMeta<typeof Envelope>;

const Template: ComponentStory<typeof Envelope> = (args: EnvelopePropsI) => (
  <x.div display="flex" gap="20px">
    <Envelope {...args} />
    <Envelope {...args} fill="red.500" />
    <Envelope {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
