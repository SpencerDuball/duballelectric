import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeCheck, EnvelopeCheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeCheck",
  component: EnvelopeCheck,
} as ComponentMeta<typeof EnvelopeCheck>;

const Template: ComponentStory<typeof EnvelopeCheck> = (
  args: EnvelopeCheckPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeCheck {...args} />
    <EnvelopeCheck {...args} fill="red.500" />
    <EnvelopeCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
