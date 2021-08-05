import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeAlt, EnvelopeAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeAlt",
  component: EnvelopeAlt,
} as ComponentMeta<typeof EnvelopeAlt>;

const Template: ComponentStory<typeof EnvelopeAlt> = (
  args: EnvelopeAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeAlt {...args} />
    <EnvelopeAlt {...args} fill="red.500" />
    <EnvelopeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
