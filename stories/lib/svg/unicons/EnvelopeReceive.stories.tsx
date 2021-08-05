import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeReceive, EnvelopeReceivePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeReceive",
  component: EnvelopeReceive,
} as ComponentMeta<typeof EnvelopeReceive>;

const Template: ComponentStory<typeof EnvelopeReceive> = (
  args: EnvelopeReceivePropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeReceive {...args} />
    <EnvelopeReceive {...args} fill="red.500" />
    <EnvelopeReceive {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
